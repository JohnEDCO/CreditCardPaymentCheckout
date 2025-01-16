import React from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors, sizes} from '../../styles/theme';

const CustomModal = ({
  visible,
  onClose,
  title,
  children,
  contentStyle = {},
  animationType = 'none',
}) => {
  return (
    <Modal visible={visible} transparent animationType={animationType}>
      <View style={styles.overlay}>
        <View style={[styles.modal, contentStyle]}>
          {title && <Text style={styles.title}>{title}</Text>}
          {children}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
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
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
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
    fontSize: sizes.medium - 1,
    fontWeight: 'condensed',
  },
  closeButton: {
    alignItems: 'center',
    width: 100,
    padding: 10,
    marginTop: 15,
    backgroundColor: colors.primary,
    borderRadius: 17,
  },
  closeText: {
    color: '#fff',
    fontWeight: 'condensed',
  },
});

export default CustomModal;
