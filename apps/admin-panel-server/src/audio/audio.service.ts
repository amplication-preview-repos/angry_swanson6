import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AudioServiceBase } from "./base/audio.service.base";

@Injectable()
export class AudioService extends AudioServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
