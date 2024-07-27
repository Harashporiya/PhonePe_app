import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Contacts from 'expo-contacts';

type Contact = {
  firstName: string;
  lastName?: string;
  phoneNumbers?: { label: string; number: string }[];
  imageAvailable?: boolean;
  image?: { uri: string };
};

const MobileContact: React.FC = () => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [contacts, setContacts] = useState<Contact[]>();
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [
            Contacts.Fields.FirstName,
            Contacts.Fields.LastName,
            Contacts.Fields.PhoneNumbers,
            Contacts.Fields.ImageAvailable,
            Contacts.Fields.Image,
          ],
        });

        if (data.length > 0) {
          setContacts(data);
        } else {
          setError('No contacts found');
        }
      } else {
        setError('Permission to access contacts denied.');
      }
    })();
  }, []);

  const getFilteredContacts = () => {
    if (!contacts) return [];
    return contacts.filter(contact => {
      const fullName = `${contact.firstName} ${contact.lastName || ''}`.toLowerCase();
      return fullName.includes(searchTerm.toLowerCase());
    });
  };

  const getContactRows = () => {
    const filteredContacts = getFilteredContacts();
    if (filteredContacts.length > 0) {
      return filteredContacts.map((contact, index) => (
        <View key={index} style={styles.contact}>
          {contact.imageAvailable && contact.image ? (
            <Image source={{ uri: contact.image.uri }} style={styles.contactImage} />
          ) : (
            <Ionicons name="person-circle-outline" size={40} color="white" />
          )}
          <View style={styles.contactInfo}>
            <Text style={styles.contactName}>Name: {contact.firstName} {contact.lastName}</Text>
            {contact.phoneNumbers && contact.phoneNumbers.length > 0 && (
              <Text style={styles.contactPhone}>Phone: {contact.phoneNumbers[0].number}</Text>
            )}
          </View>
        </View>
      ));
    } else {
      return <Text style={styles.noContacts}>No contacts found</Text>;
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.select}>Select Contact</Text>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="gray" style={styles.icon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search any mobile number"
            placeholderTextColor="#877897"
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
        </View>
        {getContactRows()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#100718",
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#21182b',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 10,
    borderColor: "#9686aa",
    borderWidth: 2,
  },
  icon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    padding: 6,
    fontSize: 19,
    color: "#90839d",
  },
  select: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    marginLeft: 10,
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#21182b',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderColor: "#9686aa",
    borderWidth: 1,
  },
  contactImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    color: 'white',
    fontSize: 17,
  },
  contactPhone: {
    color: 'white',
    fontSize: 17,
  },
  noContacts: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 20,
  }
});

export default MobileContact;
