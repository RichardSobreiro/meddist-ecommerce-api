import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserEmailIsConfirmed1734887749180 implements MigrationInterface {
  name = 'UserEmailIsConfirmed1734887749180';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "isEmailConfirmed" boolean NOT NULL DEFAULT false`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP COLUMN "isEmailConfirmed"`,
    );
  }
}
