# MSGA Corporate Website

Astro, Tailwind CSS, GSAP ScrollTrigger, Lenis로 제작한 정적 기업 홈페이지입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

프로덕션 빌드는 `npm run build`로 확인할 수 있습니다.

## GitHub Pages 배포

`main` 브랜치에 푸시하면 `.github/workflows/deploy.yml`이 사이트를 빌드하고 GitHub Pages에 배포합니다. 저장소 설정의 **Settings → Pages → Build and deployment**에서 Source를 **GitHub Actions**로 선택하세요.

배포 환경에서는 `GITHUB_PAGES=true`로 빌드되어 `/msga-web/` base path를 사용합니다. 주소는 `https://kmbzn.github.io/msga-web/`입니다.

이미지는 나중에 `public/images/`에 넣고 컴포넌트에서 경로만 교체하면 됩니다.
