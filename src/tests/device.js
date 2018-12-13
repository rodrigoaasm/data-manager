const device = {
  devices: [
    {
      attrs: {
        1: [
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
      },
      created: '2018-11-23T15:38:36.289337+00:00',
      id: 'e98b8',
      label: 'device',
      status: 'offline',
      templates: [
        1,
      ],
    },
  ],
  pagination: {
    has_next: false,
    next_page: null,
    page: 1,
    total: 1,
  },
};

module.exports = device;
