import { useEffect } from 'react';
import Test from '@/Test';

export default function App(): JSX.Element {
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/test')
        .then(response => response.json())
        .then(data => console.log(data));
    };
    fetchData();
  }, []);

  return (
    <>
      <div>Muffin's boilerPlate!</div>
      <Test />
    </>
  );
}
