import React from 'react';

const FlightTable = ({ flights }) => {
  return (
    <>
      {flights ? (
        <div className="mx-40 mb-10 tracking-wide ">
          <table
            className="table-auto 
          [&>tbody>*:nth-child(odd)]:bg-slate-200
          [&>tbody>*:nth-child(odd):hover]:bg-slate-300
          [&>tbody>*:nth-child(odd):hover]:cursor-pointer
          [&>tbody>*:nth-child(even)]:cursor-pointer
          [&>tbody>*:nth-child(even)]:bg-gray-300
          [&>tbody>*:nth-child(even):hover]:bg-gray-400/80 uppercase  w-full text-left text-gray-700 [&>tbody>*]:transition [&>tbody>*]:duration-300"
          >
            <thead>
              <tr className="bg-gray-300 text-[1.05rem] text-gray-700 sticky top-0 left-0  z-50">
                <th className="px-5 py-3 font-semibold">Flight</th>
                <th className=" py-3 font-semibold">Aircraft</th>
                <th className=" py-3 font-semibold">Class</th>
                <th className=" py-3 font-semibold">Fare</th>
                <th className=" py-3 font-semibold">Route</th>
                <th className=" py-3 font-semibold">Departure</th>
                <th className=" py-3 font-semibold">Arrival</th>
                <th className=" py-3 font-semibold">Duration</th>
                <th className=" py-3 font-semibold">Price</th>
              </tr>
            </thead>
            <tbody>
              {flights.flightOffer.map((flight, index) => {
                return (
                  <tr key={index} className="border-b border-red-400">
                    <td className="pl-5">
                      {flight.itineraries[0].segments.map((segment, index) => {
                        return (
                          <p key={index}>
                            {segment.carrierCode} {segment.flightNumber}
                          </p>
                        );
                      })}
                    </td>
                    <td>
                      {flight.itineraries[0].segments.map((segment, index) => {
                        return <p key={index}>{segment.aircraft}</p>;
                      })}
                    </td>
                    <td>
                      {flight.class[0].map((c, index) => {
                        return <p key={index}>{c}</p>;
                      })}
                    </td>
                    <td>
                      {flight.fareBasis[0].map((f, index) => {
                        return <p key={index}>{f}</p>;
                      })}
                    </td>
                    <td>
                      {flight.itineraries[0].segments.map((segment, index) => {
                        return (
                          <p key={index}>
                            {segment.departure.iataCode}-
                            {segment.arrival.iataCode}
                          </p>
                        );
                      })}
                    </td>
                    <td>
                      {flight.itineraries[0].segments.map((segment, index) => {
                        return <p key={index}>{segment.departure.at}</p>;
                      })}
                    </td>
                    <td>
                      {flight.itineraries[0].segments.map((segment, index) => {
                        return <p key={index}>{segment.arrival.at}</p>;
                      })}
                    </td>
                    <td>
                      <p>{flight.itineraries[0].duration}</p>
                    </td>
                    <td>
                      <p>{flight.price}</p>
                      <button className="bg-blue-900 text-white uppercase px-5 py-2 rounded hover:bg-blue-950 text-sm font-bold">
                        Select
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
    </>
  );
};

export default FlightTable;
