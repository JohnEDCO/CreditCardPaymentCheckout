import React from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors, sizes} from '../../styles/theme';
import useApp from '../../store/actions/app';
const CustomModal = ({
  visible,
  title,
  content,
  contentStyle = {},
  animationType = 'none',
}) => {
  const {hideModalInfo} = useApp();
  return (
      <Modal visible={visible} transparent animationType={animationType} >
        <View style={styles.overlay}>
          <View style={[styles.modal, contentStyle]}>
            {title && <Text style={styles.title}>{title}</Text>}
            <Text style={styles.content}>{content}</Text>
            <TouchableOpacity onPress={hideModalInfo} style={styles.closeButton}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    padding: 20,
    backgroundColor: colors.light,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    marginBottom: 15,
    color: colors.dark,
    textAlign: 'center',
    fontSize: sizes.medium,
    fontWeight: 'condensed',
  },
  content: {
    color: colors.dark,
    textAlign: 'center',
    fontSize: sizes.small,
    fontWeight: '400',
  },
  closeButton: {
    alignItems: 'center',
    width: 100,
    padding: 7,
    marginTop: 15,
    backgroundColor: colors.dark,
    borderRadius: 17,
  },
  closeText: {
    color: colors.secondary,
    fontWeight: 'condensed',
  },
});

export default CustomModal;
