const mongoose = require("mongoose");

//Create schema
const userSchema = new mongoose.Schema(
  {
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

    viewers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    // active: { type: Boolean, default: false },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    blockedUsers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
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
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

//Virtuals
userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

//Initials
userSchema.virtual("initials").get(function () {
  return `${this.firstName[0]}${this.lastName[0]}`;
});

//Posts count
userSchema.virtual("postsCount").get(function () {
  return this.posts.length;
});

//Create model
const User = mongoose.model("User", userSchema);

//Export model
module.exports = User;
