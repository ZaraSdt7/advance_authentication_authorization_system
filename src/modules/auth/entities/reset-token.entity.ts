import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("reset_tokens")
export class ResetTokenEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 255 })
    userID: string;

    @Column({ type: "varchar", length: 255 })
    token: string;

    @Column({ type: "datetime" })
    expireAt: Date;

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;
}
