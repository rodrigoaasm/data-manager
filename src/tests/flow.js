const flow = {
  flows: [
    {
      name: 'flow',
      enabled: true,
      id: '20c6c697-3d3a-4706-8267-72669a6016de',
      flow: [
        {
          id: '8a89221c.f5477',
          type: 'tab',
          label: 'Flow 1',
        },
        {
          id: '1dfbd338.9b187d',
          type: 'device in',
          z: '8a89221c.f5477',
          name: 'Device',
          device_source_id: 'device (9bbd77)',
          status: 'false',
          _device_id: '9bbd77',
          _device_label: '',
          _device_type: '',
          x: 147.5,
          y: 98,
          wires: [
            [
              '92f3408b.cb051',
            ],
          ],
        },
        {
          id: '92f3408b.cb051',
          type: 'http',
          z: '8a89221c.f5477',
          name: '',
          method: 'GET',
          ret: 'txt',
          body: 'payload',
          response: 'payload.response',
          url: 'http://ptsv2.com/t/03n2y-1547033185/post',
          x: 254.5,
          y: 195,
          wires: [
            [],
          ],
        },
      ],
      created: 1547033210480,
      updated: 1547033210480,
    },
  ],
};
module.exports = flow;
