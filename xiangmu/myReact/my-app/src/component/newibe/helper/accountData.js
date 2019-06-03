/**
 * 个人账户titleTab
 * @returns {Array}
 */
const gitTitle = () => {
  let title = [
    {
      accTitle: '账户信息',
      personal: 'personal'
    },
    {
      accTitle: '常用乘机人',
      personal: 'userGroup'
    },
    {
      accTitle: '优惠券',
      personal: 'couponSM'
    },
    {
      accTitle: '常旅客积分',
      personal: 'pointTag'
    }
  ]
  return title
}

/**
 * 用户认证menu
 * @returns {Array}
 */
const gitMenu = () => {
  let menu = [
    {
      list: '实名认证',
      status: '未验证'

    },
    {
      list: '个人信息设置',
      status: '未验证'

    },
    {
      list: '修改登录密码',
      status: '未验证'

    },
    {
      list: '邮箱管理及验证',
      status: '未验证'

    },
    {
      list: '手机管理及验证',
      status: '未验证'

    },
    {
      list: '绑定常旅客卡',
      status: '未验证'

    },
    {
      list: '安全保护问题',
      status: '未验证'
    }
  ]
  return menu
}
/**
 * 个人信息设置城市Info
 * @returns {Array}
 */
const getProvinceTemp = () => {
  let provinceTemp = [
    {
      'ch': '中国'
    },
    {
      'am': '美国'
    }
  ]
  return provinceTemp
}
/**
 * 联系人信息区号和电话下拉选择框填充数据
 * @returns {*[]}
 */
const getPhoneTemp = () => {
  let phones = [
    {
      'China86': '中国 86'
    },
    {
      'America89': '美国 89'
    },
    {
      'England78': '英国 78'
    },
    {
      'Australia67': '澳大利亚 67'
    },
    {
      'kyrgyzstan63': '吉尔吉斯斯坦 63'
    }
  ]
  return phones
}
/**
 * 安全保护问题
 * @returns {*[]}
 */
const getpassProtectQuesTemp = () => {
  let phones = [
    {
      'BIRTH_CITY': '您在哪个城市出生的？'
    },
    {
      'MOTHER_NAME': '您母亲的名字是什么？'
    },
    {
      'FIRST_CAR_TYPE': '您的第一辆车子的类型是什么？'
    }

  ]
  return phones
}
export {
  gitTitle,
  gitMenu,
  getProvinceTemp,
  getPhoneTemp,
  getpassProtectQuesTemp
}
