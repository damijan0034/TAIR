import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Article } from "./Article";
import { Feature } from "./Feature";

@Index("article_feature_article_id_IDX", ["articleId", "featureId"], {
  unique: true,
})
@Index("article_feature_feature_FK", ["featureId"], {})
@Entity("article_feature", { schema: "aplikacija" })
export class ArticleFeature {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "article_feature_id",
    unsigned: true,
  })
  articleFeatureId: number;

  @Column("int", { name: "article_id", unsigned: true })
  articleId: number;

  @Column("int", { name: "feature_id", unsigned: true })
  featureId: number;

  @Column("varchar", { name: "value", length: 255 })
  value: string;

  @ManyToOne(() => Article, (article) => article.articleFeatures, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "article_id", referencedColumnName: "articleId" }])
  article: Article;

  @ManyToOne(() => Feature, (feature) => feature.articleFeatures, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "feature_id", referencedColumnName: "featureId" }])
  feature: Feature;
}
