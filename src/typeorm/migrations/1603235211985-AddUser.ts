import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AddUser1603235211985 implements MigrationInterface {
  name = 'AddUser1603235211985';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "cpf" varchar(11) NOT NULL, "rg" varchar(10) NOT NULL, "email" varchar(50) NOT NULL, "password" varchar(255) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
