const shots: Record<string, string> = {
  SMARTFLOW: '/banners/banner-smartflow.jpg',
  Pravha: '/banners/banner-pravha.jpg',
  'Enterprise Knowledge Assistant': '/banners/banner-knowledge.jpg',
  Agnidrishti: '/banners/banner-agnidrishti.jpg',
  CareerPilot: '/banners/banner-careerpilot.jpg',
  TheManager: '/banners/banner-themanager.jpg',
  Aegis: '/banners/banner-aegis.jpg',
  Nirantar: '/banners/banner-nirantar.jpg',
  ETAI: '/banners/banner-etai.jpg',
  UrbanRush: '/banners/banner-urbanrush.jpg',
  'ASHA Health Assistant': '/banners/banner-asha.jpg',
  Edux: '/banners/banner-edux.jpg',
  TransitOps: '/banners/banner-transitops.jpg',
  SuddenConnect: '/banners/banner-suddenconnect.jpg',
  'Wave Racer': '/banners/banner-waveracer.jpg',
  'Mesh Network': '/banners/banner-mesh.jpg',
  'YouTube Slide Extractor': '/banners/banner-youtube.jpg',
  DSCoin: '/banners/banner-dscoin.jpg',
  'IMDB Sentiment': '/banners/banner-imdb.jpg',
  'CIFAR-10 Classifier': '/banners/banner-cifar.jpg',
  'Customer Churn': '/banners/banner-churn.jpg',
  'Movie Recommender': '/banners/banner-movie.jpg',
};

const ProjectBanner = ({ title }: { title: string }) => (
  <div className="pbanner">
    <img src={shots[title]} alt="" className="pbanner__photo" />
  </div>
);

export default ProjectBanner;
