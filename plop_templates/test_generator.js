module.exports = {
  description: 'This will create a test for a React component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: "What's the name of the component?",
      validate(value) {
        if ((/.+/).test(value)) {
          return true;
        }

        return 'name is required';
      }
    },
    {
      type: 'input',
      name: 'parents',
      message: 'Where should it go? i.e. the relative path of the directory.'
    }
  ],
  actions: [
    {
      type: 'add',
      path: '{{ parents }}__tests__/{{properCase name}}.spec.js',
      templateFile: 'plop_templates/test_template.txt',
      abortOnFail: false
    }
  ]
};
