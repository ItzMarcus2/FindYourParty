import firebase from "../../App/utils/config";
import "firebase/database";
import "firebase/auth";
import { updateParties } from '../../App/actions/actions';

function getDatabaseRef() {
  return firebase
    .database()
    .ref()
    .child("parties");
}

export async function getParties() {
  return new Promise(resolve => {
    getDatabaseRef().on("value", snapshot => {
      var array = [];
      var partyCount = 1;
      snapshot.forEach(party => {
        array.push({
          id: party.key,
          host: {
            name: {
              first: party.val().host.name.first,
              last: party.val().host.name.last
            },
            age: party.val().host.age,
            company: party.val().host.company
          },
          title: party.val().title,
          description: party.val().description,
          lokation: party.val().venue,
          type: party.val().type,
          price: party.val().price,
          date: party.val().date,
          attendees: party.val().attendees
        });
        partyCount = partyCount + 1;
      });
      console.log('updated entries');
      
      resolve([array, partyCount]);
    });
  });
}

export function newParty(party) {
  getDatabaseRef()
    .push()
    .set({
      host: {
        name: {
          first: "Marcus",
          last: "Klitgaard"
        },
        age: 17,
        company: "Complex Solutions"
      },
      title: party.title,
      description: party.description,
      type: party.fest_type,
      price: party.price,
      date: party.date,
      attendees: {
        first: {
          name: {
            first: "Mads",
            last: "Thaulow"
          },
          age: 21
        },
        second: {
          name: {
            first: "Sabine",
            last: "Woldemar"
          },
          age: 26
        }
      }
    });
}
