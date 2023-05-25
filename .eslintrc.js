module.exports = {
  extends: [
    "plugin:vue/vue3-recommended",
  ],
  rules: {
    "vue/no-unused-properties": [
      "error",
      {
        groups: ["props", "data", "computed", "methods"],
        deepData: false,
        ignorePublicMembers: false,
      },
    ],
  },
};