const template = {
  pagination: {
    has_next: false,
    next_page: null,
    page: 1,
    total: 1,
  },
  templates: [
    {
      attrs: [
        {
          created: '2018-11-23T15:38:36.163701+00:00',
          id: 1,
          label: 'model-id',
          static_value: 'model-001',
          template_id: '1',
          type: 'static',
          value_type: 'string',
        },
        {
          created: '2018-11-23T15:38:36.198161+00:00',
          id: 2,
          label: 'temperature',
          template_id: '1',
          type: 'dynamic',
          value_type: 'float',
        },
      ],
      config_attrs: [],
      created: '2018-11-23T15:38:36.071637+00:00',
      data_attrs: [
        {
          created: '2018-11-23T15:38:36.198161+00:00',
          id: 2,
          label: 'temperature',
          template_id: '1',
          type: 'dynamic',
          value_type: 'float',
        },
        {
          created: '2018-11-23T15:38:36.163701+00:00',
          id: 1,
          label: 'model-id',
          static_value: 'model-001',
          template_id: '1',
          type: 'static',
          value_type: 'string',
        },
      ],
      id: 1,
      label: 'Template',
    },
  ],
};

module.exports = template;
