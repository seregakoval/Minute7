import React, { Component } from 'react';
import { Modal, Text, ScrollView, TouchableOpacity, View } from 'react-native';
import styles from './style';
import TouchableOpacityBtn from "../TouchableOpacity/index";

export default class ModalInfo extends Component {
  render() {
    const {listValueModal, expenceModal,  hideModal, timeModal, timerModal1, resetModal } = this.props;
    const timeList = [
      {
        time: "5min"
      },
      {
        time: "10min"
      },
      {
        time: "15min"
      },
      {
        time: "20min"
      },
      {
        time: "25min"
      },
      {
        time: "30min"
      },
      {
        time: "35min"
      },
      {
        time: "40min"
      },
      {
        time: "45min"
      },
      {
        time: "50min"
      },
    ];
    const ListTimerModal1 = [
      {
        time: "Carolina Lakes",
        onPress: (item) => {
          itemProps(item)
        }
      },
      {
        time: "Christopher",
        onPress: (item) => itemProps(item)
      },
      {
        time: "Joseph",
        onPress: (item) => itemProps(item)
      },
      {
        time: "William",
        onPress: (item) => itemProps(item)
      },
      {
        time: "Carolina Lakes",
        onPress: (item) => itemProps(item)
      },
    ]
    return(
      <View>
        {timeModal && <Modal
          style={styles.modal}
          animationType={"fade"}
          visible={this.props.visibleModal}
          transparent={true}
        >
          <View style={styles.containerModal}>
            <View style={styles.wrapModal}>
              <ScrollView>
                {timeList.map((item,index) =>
                  <Text key={index} style={styles.text}>{item.time}</Text>
                )}
              </ScrollView>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.closeBtn}
              onPress={() => hideModal()}
            >
              <Text style={styles.textBtn}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Modal>}
        {timerModal1 && <Modal
          style={styles.modal}
          animationType={"fade"}
          visible={this.props.visibleModal}
          transparent={true}
        >
          <View style={styles.containerModal}>
            <View style={styles.wrapModal}>
              <ScrollView>
                {ListTimerModal1.map((item,index) =>
                  <Text key={index} style={styles.text}>{item.time}</Text>
                )}
              </ScrollView>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.closeBtn}
              onPress={() => hideModal()}
            >
              <Text style={styles.textBtn}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Modal>}
        {resetModal && <Modal
          style={styles.modal}
          animationType={"fade"}
          visible={this.props.visibleModal}
          transparent={true}
        >
          <View style={styles.containerModal}>
            <View style={styles.wrapModal}>
              <View style={styles.scrollWrap}>
                <Text style={styles.text}>Reset the current Timer? </Text>
              </View>
            </View>
            <View style={styles.ButtonsRow}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btnReset}
                onPress={() => hideModal()}
              >
                <Text style={styles.textBtn}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.btnReset, styles.leftBtnReset]}
                onPress={() => hideModal()}
              >
                <Text style={styles.textBtnReset}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        }
        {expenceModal && <Modal
          style={styles.modal}
          animationType={"fade"}
          visible={this.props.visibleModal}
          transparent={true}
        >
          <View style={styles.containerModal}>
            <View style={styles.expenceWrapModal}>
              <ScrollView>
                {listValueModal.map((item, index) =>
                  <TouchableOpacity
                    key={index}
                    onPress={() => this.props.onItemPress(item,index)}
                    >
                    <Text style={styles.text}>{item.time}</Text>
                  </TouchableOpacity>,
                )}
              </ScrollView>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.closeBtn}
              onPress={() => hideModal()}
            >
              <Text style={styles.textBtn}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Modal>}
      </View>
    );
  }
}