import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { IsIP, IsNotEmpty } from 'class-validator';
import { BlogEntity } from '../blogs/blogs.entity';
import { CommonEntity } from '../common/entities/common.entity';
@Entity({
  name: 'VISITORS',
})
export class VisitorEntity extends CommonEntity {
  @IsIP()
  @IsNotEmpty()
  @Column({ type: 'inet', nullable: false })
  ip: string;

  @ManyToOne(() => BlogEntity, (blog: BlogEntity) => blog.visitors, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'blog_id', referencedColumnName: 'id' }])
  blog: BlogEntity;
}
