const flow = {
  flows: [
    {
      name: 'flow',
      enabled: true,
      id: 'c579c542-84a3-41bb-b646-7c01085ee0ae',
      flow: [
        {
          id: 'ff3fe030.635ae',
          type: 'tab',
          label: 'Flow 1',
        },
        {
          id: 'ba0fbd0c.ec663',
          type: 'device in',
          z: 'ff3fe030.635ae',
          name: 'device',
          device_source_id: 'device (e98b8)',
          status: 'false',
          _device_id: '',
          _device_label: '',
          _device_type: '',
          x: 146.5,
          y: 182,
          wires: [
            [
              '659aeae8.bb11e4',
            ],
          ],
        },
        {
          id: '659aeae8.bb11e4',
          type: 'switch',
          z: 'ff3fe030.635ae',
          name: '',
          property: 'payload',
          propertyType: 'msg',
          rules: [
            {
              t: 'eq',
              v: '',
            },
          ],
          checkall: 'true',
          outputs: 1,
          x: 340.5,
          y: 237,
          wires: [
            [
              '232ae73c.81be08',
            ],
          ],
        },
        {
          id: '232ae73c.81be08',
          type: 'email',
          z: 'ff3fe030.635ae',
          server: 'gmail-smtp-in.l.google.com',
          port: '25',
          secure: false,
          name: '',
          dname: '',
          userid: '',
          password: '',
          x: 564.5,
          y: 324,
          wires: [],
        },
      ],
      created: 1543408871066,
      updated: 1543408871066,
    },
  ],
};

module.exports = flow;
