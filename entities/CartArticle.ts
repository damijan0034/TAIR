import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Article } from "./Article";
import { Cart } from "./Cart";

@Index("cart_article_cart_id_IDX", ["cartId", "articleId"], { unique: true })
@Index("cart_article_article_FK", ["articleId"], {})
@Entity("cart_article", { schema: "aplikacija" })
export class CartArticle {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "cart_article_id",
    unsigned: true,
  })
  cartArticleId: number;

  @Column("int", { name: "cart_id", unsigned: true })
  cartId: number;

  @Column("int", { name: "article_id", unsigned: true })
  articleId: number;

  @Column("int", { name: "quantity", unsigned: true })
  quantity: number;

  @ManyToOne(() => Article, (article) => article.cartArticles, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "article_id", referencedColumnName: "articleId" }])
  article: Article;

  @ManyToOne(() => Cart, (cart) => cart.cartArticles, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "cart_id", referencedColumnName: "cartId" }])
  cart: Cart;
}
