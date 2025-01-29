const now = new Date();
const addSeconds = (date, seconds) => {
  const time = date.getTime();
  return new Date(time + seconds * 1000);
};

extension.registerManifest({
  name: "All Settings",
  description:
    "An extension that simply lists a bunch of settings and does nothing else...",
  settingsSchemas: [
    {
      type: "date-picker",
      displayName: "Basic Date Picker",
      key: "date",
      defaultValue: now,
      description: "A Date Picker.",
    },
    {
      type: "date-picker",
      displayName: "Ranged Date Picker",
      key: "ranged-date",
      defaultValue: now,
      min: now,
      max: addSeconds(now, 3600),
    },
    {
      type: "date-picker",
      displayName: "Wheel Date Picker",
      key: "wheel-date",
      defaultValue: now,
      min: now,
      max: addSeconds(now, 3600),
      style: "wheel",
    },
    {
      type: "date-picker",
      displayTitle: "Date Picker With Title",
      displayName: "Titled Date",
      key: "titled-date",
      defaultValue: now,
      min: now,
      max: addSeconds(now, 3600),
    },
    {
      type: "date-picker",
      displayName: "Hour And Minute Date Picker",
      key: "hour-and-minute-date",
      defaultValue: now,
      displayedComponents: ["hourAndMinute"],
      min: now,
      max: addSeconds(now, 10_800),
    },
    {
      type: "date-picker",
      displayName: "Date-Only Picker",
      key: "date-only",
      defaultValue: now,
      displayedComponents: ["date"],
      min: now,
      max: addSeconds(now, 10_800),
    },
    {
      type: "stepper",
      displayName: "Basic Stepper",
      key: "stepper",
      defaultValue: 0,
      step: 1,
      min: 0,
      max: 20,
    },
    {
      type: "stepper",
      displayName: "Unlimited Stepper",
      key: "unlimited-stepper",
      defaultValue: 0,
      step: 1,
    },
    {
      type: "stepper",
      displayName: "Partially Limited Stepper",
      key: "limited-stepper",
      defaultValue: 0,
      step: 1,
      max: 10,
    },
    {
      type: "stepper",
      displayName: "Formatted Stepper",
      key: "formatted-stepper",
      defaultValue: 0,
      step: 1,
      max: 10,
      format: (n) => {
        return n % 2 === 0 ? `${n} is even` : `${n} is odd`;
      },
      description:
        "The stepper will tell you whether or not a number is even or odd.",
    },
    {
      type: "slider",
      displayName: "Basic Slider",
      key: "slider",
      defaultValue: 0,
      step: 1,
      min: 0,
      max: 20,
    },
    {
      type: "slider",
      displayName: "Slider With Stepper",
      key: "slider",
      includeStepper: true,
      defaultValue: 0,
      step: 1,
      min: 0,
      max: 20,
      description: "Use the stepper to increment and decrement the value.",
    },
    {
      type: "toggle",
      displayName: "Basic Toggle",
      key: "toggle",
      defaultValue: false,
    },
    {
      type: "toggle",
      displayTitle: "Toggle With Header",
      key: "toggle-with-header",
      defaultValue: false,
    },
    {
      type: "text-field",
      displayName: "Basic Text Field",
      key: "basic text",
      defaultValue: "",
    },
    {
      type: "text-field",
      displayName: "Line-Limited Text Field",
      key: "line-limited text",
      lineLimit: 3,
      defaultValue: "",
      description: "No more than 3 lines are allowed.",
    },
    {
      type: "text-field",
      displayName: "Validated Text Field",
      key: "validated text",
      placeholder: 'Enter "hello"',
      defaultValue: "",
      validate: (s) => ({
        status: s === "hello" ? "success" : "error",
        message: 'The entered text is not "hello".',
      }),
    },
    {
      type: "picker",
      displayName: "Basic Picker",
      key: "basic-picker",
      options: [
        { displayName: "The Bloody Red", name: "red" },
        { displayName: "The Emerald Green", name: "green" },
        { displayName: "The Ocean Blue", name: "blue" },
      ],
      defaultValue: "green",
    },
  ],
});
