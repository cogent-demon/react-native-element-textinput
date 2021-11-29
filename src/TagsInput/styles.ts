import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    alignItems: 'center',
  },
  textInput: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    paddingHorizontal: 0,
    minWidth: 80,
    marginVertical: 8
  },
  label: {
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
  },
  textError: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
  },
  selectedItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    marginVertical: 4,
    marginRight: 8,
    flexDirection: 'row'
  },
  selectedTextItem: {
    marginLeft: 5,
    color: 'gray',
    fontSize: 16
  },
});