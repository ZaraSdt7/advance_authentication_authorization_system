import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("otps")
export class OtpEntity {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 255 })
    userID: string;

    @Column({ type: "number", length: 6 })
    code: number;

    @Column({ type: "datetime" })
    expireAt: Date;

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;
}
