import BrandsAmount from '@/components/brands-amount/BrandsAmount';
// import Dialog from '@/components/ui/dialog/Dialog';

export default function Home() {
  // const onClose = async () => {
  //   'use server';
  //   console.log('close')
  // };

  // const onOk = async () => {
  //   'use server';
  //   console.log('ok')
  // };
  return (
    <main className='min-h-screen pt-[45px]'>
      <div className='container min-h-screen'>
        <BrandsAmount />
        {/* <Dialog title='Text dialog' onClose={onClose} onOk={onOk}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, necessitatibus officiis
            maiores nostrum itaque asperiores at voluptatem officia voluptas doloremque.{' '}
          </p>
        </Dialog> */}
      </div>
    </main>
  );
}
