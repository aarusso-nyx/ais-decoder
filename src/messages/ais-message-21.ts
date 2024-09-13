import AisMessage from './ais-message';
import AisBitField from '../ais-bitfield';
import format from '../format';

class AisMessage21 extends AisMessage {
  atonType: number;
  name: string;
  accuracy: boolean;
  lon: number;
  lat: number;
  dimBow: number;
  dimStern: number;
  dimPort: number;
  dimStarboard: number;
  epfd: number;
  utcSecond: number;

  constructor(messageType: number, channel: string, bitField: AisBitField) {
    super(messageType, channel, bitField);
    this.atonType = bitField.getInt(38, 5);
    this.name = bitField.getString(43, 120);
    this.accuracy = bitField.getBoolean(163, 1);
    this.lon = format.longitude(bitField.getSignedInt(164, 28));
    this.lat = format.latitude(bitField.getSignedInt(192, 27));
    this.dimBow = bitField.getInt(219, 9);
    this.dimStern = bitField.getInt(228, 9);
    this.dimPort = bitField.getInt(237, 6);
    this.dimStarboard = bitField.getInt(243, 6);
    this.epfd = bitField.getInt(249, 4);
    this.utcSecond = bitField.getInt(253, 6);
  }
}

export default AisMessage21;
