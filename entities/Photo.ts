import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Article } from "./Article";

@Index("photo_unique", ["imagePath"], { unique: true })
@Index("photo_article_FK", ["articleId"], {})
@Entity("photo", { schema: "aplikacija" })
export class Photo {
  @PrimaryGeneratedColumn({ type: "int", name: "photo_id", unsigned: true })
  photoId: number;

  @Column("int", { name: "article_id", unsigned: true })
  articleId: number;

  @Column("varchar", { name: "image_path", unique: true, length: 128 })
  imagePath: string;

  @ManyToOne(() => Article, (article) => article.photos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "article_id", referencedColumnName: "articleId" }])
  article: Article;
}
