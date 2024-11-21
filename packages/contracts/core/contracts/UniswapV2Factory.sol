pragma solidity 0.5.16;

import './interfaces/IUniswapV2Factory.sol';
import './UniswapV2Pair.sol';

interface IUniswapV2Router02 {
  function WETH() external returns (address);
}

interface IV60AddressRegistry {
  function v60Router() external returns (address);

  function isRektMeme(address) external returns (bool);

  function isMemeFactoryValid(address) external returns (bool);

  function WETH() external returns (address);
}

contract UniswapV2Factory is IUniswapV2Factory {
  address public feeTo;
  address public feeToSetter;

  mapping(address => mapping(address => address)) public getPair;
  address[] public allPairs;
  IV60AddressRegistry public v60AddressRegistry;

  event PairCreated(
    address indexed token0,
    address indexed token1,
    address pair,
    uint
  );

  constructor(address _feeToSetter, address _v60AddressRegistry) public {
    feeToSetter = _feeToSetter;
    v60AddressRegistry = IV60AddressRegistry(_v60AddressRegistry);
  }

  function allPairsLength() external view returns (uint) {
    return allPairs.length;
  }

  function createPair(
    address tokenA,
    address tokenB
  ) external returns (address pair) {
    require(tokenA != tokenB, 'UniswapV2: IDENTICAL_ADDRESSES');
    (address token0, address token1) = tokenA < tokenB
      ? (tokenA, tokenB)
      : (tokenB, tokenA);
    require(token0 != address(0), 'UniswapV2: ZERO_ADDRESS');
    // V60 ADDITION: Check that caller is either RektMeme Token Itself or a V60Router
    IV60AddressRegistry addressRegistry = v60AddressRegistry;
    if (
      addressRegistry.isRektMeme(token0) || addressRegistry.isRektMeme(token1)
    ) {
      address router = addressRegistry.v60Router();
      address WETH = IUniswapV2Router02(router).WETH();

      if (token0 == WETH || token1 == WETH) {
        require(
          msg.sender == router,
          'V60 Addition: memePair creation is only by memes logic'
        );
      }
    }
    require(getPair[token0][token1] == address(0), 'UniswapV2: PAIR_EXISTS'); // single check is sufficient
    bytes memory bytecode = type(UniswapV2Pair).creationCode;
    bytes32 salt = keccak256(abi.encodePacked(token0, token1));
    assembly {
      pair := create2(0, add(bytecode, 32), mload(bytecode), salt)
    }
    IUniswapV2Pair(pair).initialize(token0, token1);
    getPair[token0][token1] = pair;
    getPair[token1][token0] = pair; // populate mapping in the reverse direction
    allPairs.push(pair);
    emit PairCreated(token0, token1, pair, allPairs.length);
  }

  function setFeeTo(address _feeTo) external {
    require(msg.sender == feeToSetter, 'UniswapV2: FORBIDDEN');
    feeTo = _feeTo;
  }

  function setFeeToSetter(address _feeToSetter) external {
    require(msg.sender == feeToSetter, 'UniswapV2: FORBIDDEN');
    feeToSetter = _feeToSetter;
  }
}
