import { SetMetadata } from '@nestjs/common';

export const ClientRealIp = (...args: string[]) => SetMetadata('client-real-ip', args);
