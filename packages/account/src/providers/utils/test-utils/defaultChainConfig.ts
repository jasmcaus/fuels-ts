import type { ChainConfig } from './fuel-node-interfaces';

export const defaultChainConfig: ChainConfig = {
  chain_name: 'local_testnet',
  block_gas_limit: 5000000000,
  initial_state: {
    coins: [],
    messages: [],
  },
  consensus_parameters: {
    tx_params: {
      max_inputs: 255,
      max_outputs: 255,
      max_witnesses: 255,
      max_gas_per_tx: 10000000,
      max_size: 17825792,
    },
    predicate_params: {
      max_predicate_length: 1048576,
      max_predicate_data_length: 1048576,
      max_gas_per_predicate: 10000000,
      max_message_data_length: 1048576,
    },
    script_params: {
      max_script_length: 1048576,
      max_script_data_length: 1048576,
    },
    contract_params: {
      contract_max_size: 16777216,
      max_storage_slots: 255,
    },
    fee_params: {
      gas_price_factor: 92,
      gas_per_byte: 4,
    },
  },
  gas_costs: {
    add: 1,
    addi: 1,
    aloc: 1,
    and: 1,
    andi: 1,
    bal: 13,
    bhei: 1,
    bhsh: 1,
    burn: 132,
    cb: 1,
    cfei: 1,
    cfsi: 1,
    croo: 16,
    div: 1,
    divi: 1,
    ecr1: 3000,
    eck1: 951,
    ed19: 3000,
    eq: 1,
    exp: 1,
    expi: 1,
    flag: 1,
    gm: 1,
    gt: 1,
    gtf: 1,
    ji: 1,
    jmp: 1,
    jne: 1,
    jnei: 1,
    jnzi: 1,
    jmpf: 1,
    jmpb: 1,
    jnzf: 1,
    jnzb: 1,
    jnef: 1,
    jneb: 1,
    lb: 1,
    log: 9,
    lt: 1,
    lw: 1,
    mint: 135,
    mlog: 1,
    modOp: 1,
    modi: 1,
    moveOp: 1,
    movi: 1,
    mroo: 2,
    mul: 1,
    muli: 1,
    mldv: 1,
    noop: 1,
    not: 1,
    or: 1,
    ori: 1,
    poph: 2,
    popl: 2,
    pshh: 2,
    pshl: 2,
    ret: 13,
    rvrt: 13,
    sb: 1,
    sll: 1,
    slli: 1,
    srl: 1,
    srli: 1,
    srw: 12,
    sub: 1,
    subi: 1,
    sw: 1,
    sww: 67,
    time: 1,
    tr: 105,
    tro: 60,
    wdcm: 1,
    wqcm: 1,
    wdop: 1,
    wqop: 1,
    wdml: 1,
    wqml: 1,
    wddv: 1,
    wqdv: 2,
    wdmd: 3,
    wqmd: 4,
    wdam: 2,
    wqam: 3,
    wdmm: 3,
    wqmm: 3,
    xor: 1,
    xori: 1,
    call: {
      LightOperation: {
        base: 144,
        units_per_gas: 214,
      },
    },
    ccp: {
      LightOperation: {
        base: 15,
        units_per_gas: 103,
      },
    },
    csiz: {
      LightOperation: {
        base: 17,
        units_per_gas: 790,
      },
    },
    k256: {
      LightOperation: {
        base: 11,
        units_per_gas: 214,
      },
    },
    ldc: {
      LightOperation: {
        base: 15,
        units_per_gas: 272,
      },
    },
    logd: {
      LightOperation: {
        base: 26,
        units_per_gas: 64,
      },
    },
    mcl: {
      LightOperation: {
        base: 1,
        units_per_gas: 3333,
      },
    },
    mcli: {
      LightOperation: {
        base: 1,
        units_per_gas: 3333,
      },
    },
    mcp: {
      LightOperation: {
        base: 1,
        units_per_gas: 2000,
      },
    },
    mcpi: {
      LightOperation: {
        base: 3,
        units_per_gas: 2000,
      },
    },
    meq: {
      LightOperation: {
        base: 1,
        units_per_gas: 2500,
      },
    },
    retd: {
      LightOperation: {
        base: 29,
        units_per_gas: 62,
      },
    },
    s256: {
      LightOperation: {
        base: 2,
        units_per_gas: 214,
      },
    },
    scwq: {
      LightOperation: {
        base: 13,
        units_per_gas: 5,
      },
    },
    smo: {
      LightOperation: {
        base: 209,
        units_per_gas: 55,
      },
    },
    srwq: {
      LightOperation: {
        base: 47,
        units_per_gas: 5,
      },
    },
    swwq: {
      LightOperation: {
        base: 44,
        units_per_gas: 5,
      },
    },
    contract_root: {
      LightOperation: {
        base: 75,
        units_per_gas: 1,
      },
    },
    state_root: {
      LightOperation: {
        base: 412,
        units_per_gas: 1,
      },
    },
    vm_initialization: {
      HeavyOperation: {
        base: 2000,
        gas_per_unit: 0,
      },
    },
    new_storage_per_byte: 1,
  },
  consensus: {
    PoA: {
      signing_key: '0x94ffcc53b892684acefaebc8a3d4a595e528a8cf664eeb3ef36f1020b0809d0d',
    },
  },
};