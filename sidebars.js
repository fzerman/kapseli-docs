module.exports = {
  docs: ["introduction", "getting-started"],
  api: [
    "api",
    {
      type: "category",
      label: "Managers",
      items: [
        "api/managers/app-manager",
        "api/managers/command-manager",
        "api/managers/data-manager",
        "api/managers/event-manager",
        "api/managers/form-manager",
        "api/managers/i18n",
        "api/managers/modal-manager",
        "api/managers/panel-manager",
        "api/managers/plugin-manager",
        "api/managers/route-manager",
        "api/managers/storage-manager",
        "api/managers/view-manager",
      ],
    },
  ],
};
