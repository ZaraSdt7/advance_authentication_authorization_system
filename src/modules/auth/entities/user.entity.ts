import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Index({ unique: true })
    @Column({ type: "varchar", length: 255 })
    email: string;

    @Column({ type: "varchar", length: 255 })
    password: string;

    @Column({ type: "boolean", default: false })
    isEmailVerified: boolean;

    @Column({ type: "boolean", default: false })
    twoFactorEnabled: boolean;

    @Column({ type: "varchar", length: 255, nullable: true })
    twoFactorSecret?: string;

    @Column({ type: "varchar", length: 50, default: "user" })
    role: string;

    @Column({ type: "varchar", length: 20, nullable: true })
    mobile?: string;

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
    createdAt?: Date;

    @Column({ type: "datetime", nullable: true })
    updateAt?: Date;
}
