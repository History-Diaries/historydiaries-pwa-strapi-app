import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
interface Props {}

const styleBanner = {
  width: "100%",
  height: "70vh",
  borderRadius: "30px",
  backgroundSize: "cover",
  backgroundRepeat: "repeat-y",
  backgroundPosition: "center",
  backgroundImage: "url('https://via.placeholder.com/1920x1080')",
};
const BlogArticle = (props: Props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className="home">
        <div style={styleBanner}></div>
        <div className="blog-title">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis, sunt?
          </p>
        </div>
        <div className="date center mt-1">
          <i className="fa fa-calendar m-a" aria-hidden="true"></i> &nbsp;
          &nbsp;
          <p>26 Jan, 2020. 5:30pm</p>
        </div>
        <div className="blog-content-2">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            adipisci sunt porro ipsam impedit alias dolorem provident! Alias
            necessitatibus facilis eveniet harum, illum quis ipsa mollitia,
            accusamus vero voluptate adipisci! Quod doloremque perferendis modi
            ab delectus. Soluta modi maiores quae labore earum vero cum
            veritatis, nulla voluptatibus dolor fugit incidunt explicabo
            praesentium cupiditate delectus facilis necessitatibus nostrum,
            obcaecati odio tempora. Excepturi in ab facere aut maiores quisquam,
            porro tempora temporibus soluta exercitationem cumque saepe error
            adipisci eligendi iusto mollitia. Autem obcaecati corrupti
            praesentium voluptate reprehenderit exercitationem debitis deleniti
            omnis doloremque. Necessitatibus perferendis amet ab eius laudantium
            ducimus sunt voluptatem fugiat alias delectus officia nemo, et
            <p>
              <br />
            </p>
            distinctio voluptates sapiente pariatur exercitationem! Earum natus
            delectus maxime, repudiandae fuga quo impedit! Natus, harum? Quasi
            saepe consectetur nesciunt ab reiciendis fuga voluptatem nostrum
            repudiandae. Officia doloremque, consequatur voluptatibus delectus
            officiis, odit perspiciatis tenetur minima quis veniam repellat
            ratione saepe animi tempore magnam eos atque. Repellendus aperiam,
            quibusdam consequuntur ipsam odio fugit animi voluptas ullam officia
            explicabo quidem quos velit magni quo aut repudiandae ratione
            dignissimos aliquid. Sunt odit cumque reprehenderit veniam earum,
            tempora labore. Reiciendis laborum sunt facilis inventore fugiat
            quos iure quis incidunt dolorum expedita dolorem sint rem
            exercitationem itaque consequatur magnam animi sapiente, aliquam
            tempora at architecto dolores accusantium?
          </p>
          <br />
          <p>
            Quasi, iusto dolores? Odio veritatis exercitationem ullam, ea odit
            amet voluptate repudiandae quisquam reprehenderit nisi delectus
            accusamus magnam perspiciatis est molestiae, dicta deserunt ad saepe
            expedita ab labore laboriosam? Animi quos unde inventore. Dolorem
            exercitationem nihil libero dolor earum reiciendis, cum voluptatem
            quod iusto eius officiis impedit explicabo ratione recusandae ipsum
            animi architecto culpa obcaecati quia inventore a fuga quasi? Eius,
            error asperiores! Ipsam delectus reiciendis amet mollitia
            consequuntur tenetur commodi, quam tempora. Tempora quisquam
            architecto aperiam saepe placeat molestias, corrupti cumque vero
            quia. Veniam aliquid soluta quas sit id numquam labore molestiae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            vel omnis alias? At, reprehenderit? Praesentium temporibus
            accusantium dicta odio et soluta necessitatibus neque expedita velit
            optio minus eum, deserunt ea. Natus commodi sed exercitationem
            ducimus, provident porro dolores. Accusantium dolorum dolores
            consequatur laudantium omnis incidunt totam tempora, voluptatum eos
            porro quibusdam alias odit. Eaque nostrum explicabo repellat sit
            praesentium omnis. Corporis, nemo. A doloremque nisi alias qui
            quisquam? Corporis, unde sit porro explicabo tempore minima vero
            provident dolorem. Architecto provident nisi cum iste alias non nam
            distinctio earum sit asperiores! Aliquam unde numquam voluptatum
            earum iste eius officia fugiat sapiente quae voluptatibus nulla
            dolores, obcaecati laborum deleniti, magnam itaque omnis ullam?
          </p>
          <br />
          <p>
            Tenetur dignissimos blanditiis iure accusantium corporis modi
            sapiente nisi? Laborum deleniti quam dolor, rerum iure eveniet
            quibusdam nostrum corporis nemo magnam odit consequuntur velit
            cumque aperiam vero ipsum eos exercitationem qui, maiores commodi
            ullam sunt accusantium. Omnis, corporis labore? Alias iusto minus
            error inventore quis architecto perspiciatis quam similique tenetur,
            perferendis omnis cupiditate, officia obcaecati quidem, officiis
            facilis iste ex. Eveniet explicabo aut autem ad numquam commodi, at
            cum? Incidunt inventore adipisci numquam nesciunt vitae vero
            suscipit fugiat quibusdam, debitis ratione. Nulla, quis suscipit?
            Deserunt eius eos tenetur, consequuntur laboriosam repellendus,
            quaerat minus nulla earum magnam, excepturi quasi. Illum! Quidem rem
            sunt quos ratione facere eum culpa natus eligendi labore ex!
            Aspernatur esse, ab quibusdam itaque sed reiciendis atque est,
            provident perferendis tempora voluptas unde magni enim optio quidem!
            Expedita itaque beatae iure magni cupiditate! Ipsa et, maxime
            maiores nostrum, tenetur, quis tempora placeat quae praesentium
            similique sunt! Dolore, nobis. Delectus recusandae fuga fugit nulla
            consequatur nisi? Eveniet, nihil. Provident eos excepturi autem sed
            aliquid ad maxime velit doloremque dignissimos magnam distinctio,
            nulla unde voluptatem nesciunt adipisci maiores omnis natus est sit
            consectetur molestiae quia optio. Fugiat, libero repudiandae.
          </p>
        </div>
      </div>
      <div className="center">
        <div className="more-article">
          <div>
            <Link to="/blog" className="ma-btn">
              Read More Articles
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default BlogArticle;
