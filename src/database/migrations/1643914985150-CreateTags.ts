import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTags1643914985150 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tags",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "Now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "Now()"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("tags");
    }

}
