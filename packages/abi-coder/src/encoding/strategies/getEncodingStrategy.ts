import { ErrorCode, FuelError } from '@fuel-ts/errors';

import type { IGetCoder } from '../../types/IGetCoder';
import { ENCODING_V0, ENCODING_V1 } from '../../utils/constants';

import { getCoder as getCoderV0 } from './getCoderV0';
import { getCoder as getCoderV1 } from './getCoderV1';

/**
 * Retrieves the appropriate encoding function for a given encoding version.
 *
 * @param encoding - the version to provide a strategy for.
 * @throws for an unsupported encoding version.
 * @returns the appropriate encoding strategy.
 */
export function getEncodingStrategy(encoding: string = ENCODING_V0): IGetCoder {
  switch (encoding) {
    case ENCODING_V1:
      return { getCoder: getCoderV1 };
    case ENCODING_V0:
      return { getCoder: getCoderV0 };
    default:
      throw new FuelError(
        ErrorCode.UNSUPPORTED_ENCODING_VERSION,
        `Encoding version ${encoding} is unsupported.`
      );
  }
}