import Badge from "../components/Argon/Badge";
import BaseAlert from "../components/Argon/BaseAlert";
import BaseButton from "../components/Argon/BaseButton";
import BaseCheckbox from "../components/Argon/BaseCheckbox";
import BaseInput from "../components/Argon/BaseInput";
import BaseDropdown from "../components/Argon/BaseDropdown";
import BaseNav from "../components/Argon/BaseNav";
import BasePagination from "../components/Argon/BasePagination";
import BaseProgress from "../components/Argon/BaseProgress";
import BaseRadio from "../components/Argon/BaseRadio";
import BaseSlider from "../components/Argon/BaseSlider";
import BaseSwitch from "../components/Argon/BaseSwitch";
import BaseTable from "../components/Argon/BaseTable";
import BaseHeader from "../components/Argon/BaseHeader";
import Card from "../components/Argon/Card";
import StatsCard from "../components/Argon/StatsCard";
import Modal from "../components/Argon/Modal";
import TabPane from "../components/Tabs/TabPane";
import Tabs from "../components/Tabs/Tabs";

export default {
  install(Vue) {
    Vue.component(Badge.name, Badge);
    Vue.component(BaseAlert.name, BaseAlert);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseNav.name, BaseNav);
    Vue.component(BaseDropdown.name, BaseDropdown);
    Vue.component(BaseCheckbox.name, BaseCheckbox);
    Vue.component(BasePagination.name, BasePagination);
    Vue.component(BaseProgress.name, BaseProgress);
    Vue.component(BaseRadio.name, BaseRadio);
    Vue.component(BaseSlider.name, BaseSlider);
    Vue.component(BaseSwitch.name, BaseSwitch);
    Vue.component(BaseTable.name, BaseTable);
    Vue.component(BaseHeader.name, BaseHeader);
    Vue.component(Card.name, Card);
    Vue.component(StatsCard.name, StatsCard);
    Vue.component(Modal.name, Modal);
    Vue.component(TabPane.name, TabPane);
    Vue.component(Tabs.name, Tabs);
  }
};
