const Home = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-grow bg-green-50">
        <h1 className="p-4">メニュー</h1>
        <div>{/* メニューの内容をここに追加 */}</div>
      </div>
      <div className="flex-grow bg-blue-50">
        <h1 className="p-4">お知らせ</h1>
        <div>{/* お知らせの内容をここに追加 */}</div>
      </div>
    </div>
  );
};

export default Home;
