import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  public readonly prisma = new PrismaClient().$extends(withAccelerate());

  constructor() {}

  async onModuleInit() {
    await this.prisma.$connect();
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }
}
