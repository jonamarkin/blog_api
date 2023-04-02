const mongoose = require("mongoose");
//Require post model
const Post = require("../Post/Post");

//Create schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "firstName is required"],
    },
    lastName: {
        type: String,
        required: [true, "lastName is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "email already exists"],
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    avatar: {
        type: String,
    },

    // postCount: {
    //   type: Number,
    //   default: 0,
    // },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        enum: ["admin", "guest", "editor"],
    },

    viewers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }, ],

    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }, ],

    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }, ],
    // active: { type: Boolean, default: false },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    }, ],
    blockedUsers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }, ],
    plan: {
        type: String,
        enum: ["free", "premium", "vip"],
        default: "free",
    },

    userBadge: {
        type: String,
        enum: ["newbie", "expert", "master", "legend"],
        default: "newbie",
    },
    //Last login date
    lastLogin: {
        type: Date,
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
});

//Use hooks to find last time user created a post
userSchema.pre("findOne", async function(next) {
    const userId = this._conditions._id;

    const posts = await Post.find({ user: userId });

    //If user has no posts, return
    if (posts.length === 0) {
        return next();
    }

    const lastPost = posts[posts.length - 1];
    //Last post date
    const lastPostDate = lastPost.createdAt.toDateString();

    //Add virtual property to user
    //this._conditions.lastPost = postFound.createdAt;
    userSchema.virtual("lastPost").get(function() {
        return lastPostDate;
    });

    const today = new Date();
    const diffTime = Math.abs(today - lastPost.createdAt);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    //console.log("Diffdays" + diffDays);
    if (diffDays <= 30) {
        //Set isBlocked to false
        await User.findByIdAndUpdate(userId, { isBlocked: false });
        userSchema.virtual("isActive").get(function() {
            return true;
        });
    } else {
        await User.findByIdAndUpdate(userId, { isBlocked: true });
        userSchema.virtual("isActive").get(function() {
            return false;
        });
    }

    //Update badge based on number of posts
    if (posts.length >= 1 && posts.length <= 10) {
        //Set badge to newbie
        await User.findByIdAndUpdate(userId, { userBadge: "newbie" });
    } else if (posts.length >= 11 && posts.length <= 20) {
        //Set badge to expert
        await User.findByIdAndUpdate(userId, { userBadge: "expert" });
    } else if (posts.length >= 21 && posts.length <= 30) {
        //Set badge to master
        await User.findByIdAndUpdate(userId, { userBadge: "master" });
    } else if (posts.length >= 31) {
        //Set badge to legend
        await this.findByIdAndUpdate(userId, { userBadge: "legend" });
    }

    next();
});

//Virtuals
userSchema.virtual("fullName").get(function() {
    return `${this.firstName} ${this.lastName}`;
});

//Initials
userSchema.virtual("initials").get(function() {
    return `${this.firstName[0]}${this.lastName[0]}`;
});

//Posts count
userSchema.virtual("postsCount").get(function() {
    return this.posts.length;
});

//Followers count
userSchema.virtual("followersCount").get(function() {
    return this.followers.length;
});

//Following count
userSchema.virtual("followingCount").get(function() {
    return this.following.length;
});

//Blocked users count
userSchema.virtual("blockedUsersCount").get(function() {
    return this.blockedUsers.length;
});

//Viewers count
userSchema.virtual("viewersCount").get(function() {
    return this.viewers.length;
});

//Virtual to check if user is active -  if user has logged in within the last 30 days
// userSchema.virtual("isActive").get(function() {
//     const lastLogin = this.updatedAt;
//     const today = new Date();
//     const diffTime = Math.abs(today - lastLogin);
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//     return diffDays <= 30;
// });

//Virtual to check if user is active - if user has created a post within the last 30 days
userSchema.virtual("isActive").get(function() {
    const lastPost = this.lastPost;
    const today = new Date();
    const diffTime = Math.abs(today - lastPost);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 30;
});

//Last active date - use the lastLogin date if user has logged in within the last 30 days
//Otherwise use the last post date
//Return number of days since last active
userSchema.virtual("lastActiveDay").get(function() {
    const lastLogin = this.lastLogin;
    const today = new Date();
    const diffTime = Math.abs(today - lastLogin);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    //If diffDays is equal to 1, return "yesterday"
    if (diffDays === 1) {
        return "Yesterday";
    }

    //If diffDays is zero, return "today"
    if (diffDays === 0) {
        return "Today";
    }

    //if diffDays is greater than 1, return "x days ago"

    return diffDays + " days ago";
});

//Create model
const User = mongoose.model("User", userSchema);

//Export model
module.exports = User;