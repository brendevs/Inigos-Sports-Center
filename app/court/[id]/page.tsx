interface Props {
  params: {
    id: string;
  };
}

export default function Schedule() {
  return (
    <div className="min-h-screen p-6 bg-gray-50 flex flex-col gap-6 bg-white ">
      <h1 className="text-2xl font-bold font-sans">Schedule</h1>
      <div>
        <div>
          <p>date</p>
          <p>time</p>
        </div>
        <div>
          <p> show available court</p>
        </div>
      </div>
      <p className="font-bold"></p>
    </div>
  );
}
