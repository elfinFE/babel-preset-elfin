module.exports = function () {
    return {
        plugins: [
            require("@elfin-fe/babel-plugin-glodash"),
            require("@elfin-fe/babel-plugin-route-names-chain"),
        ],
    }
}