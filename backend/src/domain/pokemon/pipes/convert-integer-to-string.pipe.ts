import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

export class ConvertIntegerToStringPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const { type } = metadata;

    if (type === 'body' && typeof value === 'object' && value !== null) {
      const { height, weight } = value;

      if (typeof height === 'number') {
        value.height = height.toString();
      }

      if (typeof weight === 'number') {
        value.weight = weight.toString();
      }
    }

    return value;
  }
}
