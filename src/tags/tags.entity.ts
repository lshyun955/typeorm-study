import { BlogEntity } from '../blogs/blogs.entity';
import { CommonEntity } from '../common/entities/common.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity({ name: 'TAG' })
export class TagEntity extends CommonEntity {
  @Column({ type: 'varchar', nullable: true })
  name: string;

  @ManyToMany(() => BlogEntity, (blog: BlogEntity) => blog.tags)
  blogs: BlogEntity[];
}
