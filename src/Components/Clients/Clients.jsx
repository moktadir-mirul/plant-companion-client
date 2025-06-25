import React, {  use, useEffect, useRef } from "react";
import ClientCard from "./ClientCard";
import { animate, inView } from "motion";
// import { inView, animate } from "motion";
const clientsPromise = fetch('/ClientsData.json').then(res => res.json())
const Clients = () => {
  const clients = use(clientsPromise);
  const clientHRef = useRef();

  useEffect(() => {
    inView(clientHRef.current, () => {
      animate(
        clientHRef.current,
        { x: [400, 0], opacity: [0, 1] },
        { duration: 1.1, easing: "ease-out" }
      );
    });
  }, []);
  return (
    <div className="bg-green-100 dark:bg-gray-700 bg-[url(./assets/trasnparent.png)]">
      <div ref={clientHRef}>
        <h1 className='text-center py-5 text-6xl text-transparent bg-clip-text bg-gradient-to-br from-green-900 dark:from-green-400 to-lime-500 play font-bold'>
                    Praises from our plant lovers
                </h1>
      </div>
      <div className="w-9/12 mx-auto grid grid-cols-1 gap-10 pt-5 pb-12">
        {clients.map((client) => (
          <ClientCard client={client} key={client.id}></ClientCard>
        ))}
      </div>
    </div>
  );
};

export default Clients;
