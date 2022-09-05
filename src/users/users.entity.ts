import { Exclude } from 'class-transformer';
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { BlogEntity } from '../blogs/blogs.entity';
import { CommonEntity } from '../common/entities/common.entity';
import { ProfileEntity } from '../profiles/profiles.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Index('email', ['email'], { unique: true })
@Entity({ name: 'USER' })
export class UserEntity extends CommonEntity {
  @IsEmail({}, { message: '올바른 이메일을 입력해주세요.' })
  @IsNotEmpty({ message: '이메일을 입력해주세요.' })
  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @IsString()
  @IsNotEmpty({ message: '이름을 입력해주세요.' })
  @Column({ type: 'varchar', nullable: false })
  username: string;

  @Exclude()
  @Column({ type: 'varchar', nullable: false })
  password: string;

  @IsBoolean()
  @Column({ type: 'boolean', default: false })
  isAdmin: boolean;

  @OneToOne(() => ProfileEntity)
  @JoinColumn({ name: 'profile_id', referencedColumnName: 'id' })
  profile: ProfileEntity;

  @OneToMany(() => BlogEntity, (blog: BlogEntity) => blog.author, {
    cascade: true,
  })
  blogs: BlogEntity[];
}
