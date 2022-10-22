import BreadcrumbItem from "components/atoms/BreadcrumbItem";
import Separator from "components/atoms/Separator";
import Box from "components/layout/Box";
import Flex from "components/layout/Flex";
import Breadcrumb from "components/molecules/Breadcrumb";
import Layout from "components/templetes/Layout";
import UserProductCardListContainer from "containers/UserProductCardListContainer";
import UserProfileContainer from "containers/UserProfileContainer";
import {
  InferGetStaticPropsType,
  NextPage,
  GetStaticPropsContext,
  GetStaticPaths,
} from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import getAllProducts from "services/products/get-all-products";
import getAllUsers from "services/users/get-all-users";
import getUser from "services/users/get-user";
import { ApiContext } from "types";

type UserPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const UserPage: NextPage<UserPageProps> = ({
  id,
  user,
  products,
}: UserPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Flex
        paddingTop={2}
        paddingBottom={2}
        paddingLeft={{ base: 2, md: 0 }}
        paddingRight={{ base: 2, md: 0 }}
        justifyContent="center"
      >
        <Box width="1180px">
          <Box marginBottom={2}>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link href="/">
                  <a>トップ</a>
                </Link>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
          <Box marginBottom={1}>
            {/*
              ユーザー情報を表示する。useUserで常に最新のデータを取得する
            */}
            <UserProfileContainer userId={id} user={user} />
          </Box>
          <Box marginBottom={1}>
            <Separator />
          </Box>
          <UserProductCardListContainer userId={id} products={products} />
        </Box>
      </Flex>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || "http://localhost:5000",
  };
  const users = await getAllUsers(context);
  const paths = users.map((u) => `/users/${u.id}`);

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || "http://localhost:5000",
  };

  if (!params) {
    throw new Error("params is undefined");
  }

  // ユーザー情報とユーザーの所持する商品を取得し、静的ページを作成
  // 10秒でrevalidateな状態に、静的ページを更新する
  const userId = Number(params.id);
  const [user, products] = await Promise.all([
    getUser(context, { id: userId }),
    getAllProducts(context, { userId }),
  ]);

  return {
    props: {
      id: userId,
      user,
      products: products ?? [],
    },
    revalidate: 10,
  };
};

export default UserPage;
