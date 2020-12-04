const mong = require("mongoose");

const userSchema = new mong.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        imgUrl: {
            type: String,
        },
        bio: {
            type: String,
        },
        location: {
            type: String,
        },
        nature: {
            type: String,
        },
        followersCount: {
            type: Number,
            default: 0,
        },
        followingCount: {
            type: Number,
            default: 0,
        },
        followers: {
            type: [String],
        },
        following: {
            type: [String],
        },
        notification: {
            type: [
                {
                    notificationId: String,
                    from: String,
                    type: String,
                },
            ],
        },
    },
    { timestamps: true }
);

const User = mong.model("Users", userSchema);
module.exports = User;
