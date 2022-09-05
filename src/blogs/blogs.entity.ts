import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CommonEntity } from '../common/entities/common.entity';
import { TagEntity } from '../tags/tags.entity';
import { UserEntity } from '../users/users.entity';
import { VisitorEntity } from '../visitors/visitors.entity';
@Entity({
  name: 'BLOG',
})
export class BlogEntity extends CommonEntity {
  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  contents: string;

  @ManyToOne(() => UserEntity, (author: UserEntity) => author.blogs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    {
      name: 'author_id',
      referencedColumnName: 'id',
    },
  ])
  author: UserEntity;

  @ManyToMany(() => TagEntity, (tag: TagEntity) => tag.blogs, { cascade: true })
  @JoinTable({
    name: 'BLOG_TAG',
    joinColumn: {
      name: 'blog_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'tag_id',
      referencedColumnName: 'id',
    },
  })
  tags: TagEntity[];

  @OneToMany(() => VisitorEntity, (visitor: VisitorEntity) => visitor.blog, {
    cascade: true,
  })
  visitors: VisitorEntity[];
}
