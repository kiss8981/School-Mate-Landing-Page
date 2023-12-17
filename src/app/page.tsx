import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="w-full items-center justify-center flex mx-auto bg-[#F9F9F9] min-h-[100vh]">
        <div className="w-full items-center justify-center flex mx-auto flex-col px-10">
          <span className="lg:text-3xl text-2xl font-black break-keep text-center">
            <b className="text-primary-500">스쿨메이트 앱</b>을 다운로드
            받으세요.
          </span>
          <div className="flex flex-col mt-5 text-lg text-center font-bold break-keep text-[#7C7C7C]">
            <span>
              스쿨메이트는 학교 인증을 통해 같은 학교 친구들만 사용 할 수 있는
              커뮤니티입니다.
            </span>
            <span className="lg:mt-0 mt-1">
              앱 스토어, 플레이 스토어에서 스쿨메이트를 검색해보세요.
            </span>
          </div>

          <div className="flex lg:flex-row flex-col mt-10 lg:space-x-6">
            <Link
              href="https://apps.apple.com/us/app/%EC%8A%A4%EC%BF%A8%EB%A9%94%EC%9D%B4%ED%8A%B8/id6473076162"
              target="_blank"
              className="items-center justify-center flex"
            >
              <Image
                src="/logo/Appstore_Download.svg"
                alt="appstore"
                width={220}
                height={68}
              />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=kr.codest.schoolmateapp"
              className="items-center justify-center flex"
            >
              <Image
                src="/logo/Google_Download.svg"
                alt="googleplay"
                width={220}
                height={68}
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="max-w-[1280px] px-4"></section>
    </>
  );
}
