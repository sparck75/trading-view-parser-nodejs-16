import { TV_REPONSE_INTERFACE } from '../src/contracts';
const mockResponse: TV_REPONSE_INTERFACE = {
  data: [
    {
      s: 'BINANCE:BNBBUSD',
      d: [
        0,
        0.4,
        0.8,
        60.30438272,
        58.11432567,
        67.91086359,
        75.41557603,
        72.5505465,
        78.94317738,
        97.64269788,
        46.70069389,
        42.32364322,
        27.59044667,
        14.02877464,
        29.32974072,
        14.91314467,
        65.53373382,
        64.65378353,
        63.49947029,
        36.0385,
        23.2633,
        29.21788644,
        30.84272853,
        0,
        46.85216014,
        0,
        -32.03757815,
        1,
        26.68203781,
        0,
        61.1972746,
        262.01180263,
        276.6385,
        256.32326,
        242.19829418,
        247.291165,
        220.5009157,
        228.50531,
        183.45577392,
        161.95461,
        129.77780244,
        98.960248,
        86.28341313,
        63.346821,
        0,
        236.99495,
        1,
        249.69288899,
        -1,
        287.63272593,
        null,
        null,
        53.4043,
        200.6471,
        357.8237,
        505.0665,
        809.4859,
        null,
        12.5159108,
        84.3588892,
        200.6471,
        316.9353108,
        388.7782892,
        505.0665,
        126.865565,
        154.77067667,
        182.67578833,
        200.6471,
        238.48601167,
        266.39112333,
        294.296235,
        null,
        null,
        58.4472,
        203.16855,
        362.8666,
        507.58795,
        667.286,
        127.0257,
        237.4578,
        431.4451,
      ],
    },
  ],
  totalCount: 1,
};
import { ParseTAResponse } from '../src/reponseParser';
describe('response parser', () => {
  it('delays the greeting by 2 seconds', () => {
    const result = new ParseTAResponse(mockResponse).parse();
    console.log(result);
  });
});
